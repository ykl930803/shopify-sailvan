class CompareToggleManager {
    constructor(parentSelector) {
        this.selectedOptions = [];
        this.parentElement = document.querySelector(parentSelector);
        if (!this.parentElement) {
            console.error(`Parent element with selector "${parentSelector}" not found.`);
            return;
        }
        this.btnCompare = this.parentElement.querySelector("#btnCompare");
        this.compareList= this.parentElement.querySelector(".compare-list-scrollable");
        if (!this.btnCompare) {
            console.error(`Button with class "btnCompare" not found within the parent element.`);
            return;
        }
        this.activeCompareToggles = [];
        this.setupActiveCompareToggles();

        const showCellsButton = this.parentElement.querySelector("#btnReset");
        showCellsButton.addEventListener("click", (event) => {
            event.preventDefault();
            this.showHiddenCells();
        });

        const hideCellsButton = this.parentElement.querySelector("#btnCompare");
        hideCellsButton.addEventListener("click", (event) => {
            event.preventDefault();
            this.hideSpecificCells();
        });

        const closeEls = this.parentElement.querySelectorAll(".btn-close");
        closeEls.forEach((hideCol) => {
                hideCol.addEventListener("click", (event) => {
                this.hideSpecificCell(hideCol);
                this.countProducts();
            });
        });

        this.scrollAmount = this.compareList.querySelector(".compare-item").getBoundingClientRect().width;

        const arrowLeft = this.parentElement.querySelector(".swiper-button-prev");
        const arrowRight = this.parentElement.querySelector(".swiper-button-next");

        arrowLeft.addEventListener("click", () => this.scrollLeft());
        arrowRight.addEventListener("click", () => this.scrollRight());
    }
    
    scrollLeft() {
        this.compareList.scrollBy(-this.scrollAmount, 0, 'smooth');
    }

    scrollRight() {
        this.compareList.scrollBy(this.scrollAmount, 0, 'smooth');
        // Check if it's the end of the table content, then scroll back to the start
        if (this.compareList.offsetWidth + this.compareList.scrollLeft >= this.compareList.scrollWidth) {
           // this.compareList.scrollBy(-this.compareList.scrollWidth, 0);
        }
    }
    setupActiveCompareToggles() {
        const activeToggles = this.parentElement.querySelectorAll(".compare-toggle");
        activeToggles.forEach((toggle) => {
            toggle.addEventListener("click", (event) => {
                event.preventDefault();
                toggle.classList.toggle("active");
                this.countCheckedCheckboxes();
            });
            this.activeCompareToggles.push(toggle);
        });
    }

    countCheckedCheckboxes() {
        let checkedCount = 0;
        this.activeCompareToggles.forEach((checkbox) => {
            if (checkbox.classList.contains("active")) {
                checkedCount++;
            }
        });

        this.btnCompare.disabled = !(checkedCount > 1);
        this.btnCompare.classList.toggle("active", checkedCount > 1);
    }

    hideSpecificCells() {
        this.selectedOptions = [];
        const activeToggles = this.parentElement.querySelectorAll(".compare-toggle");
        activeToggles.forEach((toggle) => {
            const parentLI = toggle.closest('.compare-item');
            const index = Array.prototype.indexOf.call(parentLI.parentNode.children, parentLI);
            if (!toggle.classList.contains("active")) {
                this.selectedOptions.push(index);
            }
        });
        
        const list = this.parentElement.querySelector("#compare_list");
        if (this.selectedOptions.length > 0) {
            for (let i = 0; i < list.children.length; i++) {
                const listItem = list.children[i];
                if (this.selectedOptions.includes(i)) {
                    listItem.style.display = "none";
                }
            }
        }        
    }

    showHiddenCells() {
        const list = this.parentElement.querySelector("#compare_list");
        
        for (let i = 0; i < list.children.length; i++) {
            const listItem = list.children[i];
            listItem.style.display = "list-item"; 
        }
        
        this.btnCompare.disabled = true;
        this.btnCompare.classList.remove("active");
        this.activeCompareToggles.forEach((toggle) => {
            toggle.classList.remove("active");
        });
    }

    hideSpecificCell(el) {
        this.selectedOptions = [];
        const parentLI = el.closest('.compare-item');
        const index = Array.prototype.indexOf.call(parentLI.parentNode.children, parentLI);
        this.selectedOptions.push(index);
        const list = this.parentElement.querySelector("#compare_list");
        const itemsToHide = this.selectedOptions;
        for (let i = 0; i < list.children.length; i++) {
            const listItem = list.children[i];
            if (itemsToHide.includes(i)) {
                listItem.style.display = "none";
            }
        }   
        
    }
 
    countProducts() {
        const closeEls = this.parentElement.querySelectorAll(".btn-close");

        const visibleCloseElementsCount = Array.from(closeEls).filter((btn) => {
            return !this.isElementHidden(btn.parentElement);
        }).length;
        if (visibleCloseElementsCount < 3) {
            closeEls.forEach((btn) => {
                btn.disabled = true;
            });
        }
    }

    isElementHidden(element) {
        const computedStyle = window.getComputedStyle(element);
        return computedStyle.display === "none" || computedStyle.visibility === "hidden";
    }
}
