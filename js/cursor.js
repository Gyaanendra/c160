AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
      this.handleClickEvents();
    },
  
    handlePlacesListState: function () {
      const id = this.el.getAttribute("id");

      const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"];

      if (placesId.includes(id)) {
        const placeContainer = document.querySelector("#places-container");
        placeContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#D76B30",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      // Mouse Enter Events
      this.el.addEventListener("mouseenter", () => {
        this.handlePlacesListState();
      });
    },
    handleMouseLeaveEvents: function () {
      // Mouse Leave Events
      this.el.addEventListener("mouseleave",()=>{
        const {selectedItemId} = this.data 
        if(selectedItemId){
            const EL = document.querySelector(`#${selectedItemId}`)
            const ID = EL.getAttribute("id");
            if(ID === selectedItemId){
                 EL.setAttribute("material", {
                    color: "#00C897",
                    opacity: 1,
                });
            }
        }
      })
      
    },
    handleClickEvents: function(){
      this.el.addEventListener("click",(event)=>{
        const placesContainer = document.querySelector("#places-container")
        const {state} = placesContainer.getAttribute("tour")
        if(state === "places-list"){
          const id =this.el.getAttribute("id")
          const placesId = ["taj-mahal", "budapest", "new-york-city", "eiffel-tower"];
          if(placesId.includes(id)){
            placesContainer.setAttribute("tour",{state:"view",selected_card:id})
          }
        }
        if (state === "view" || state === "change-view" ){
          this.handleViewState()
        }
      })
    },

    handleViewState:function () {
      const EL = this.el
      const id = EL.getAttribute("id")
      const placesContainer = document.querySelector("#places-container")
      const {selected_item_id} = placesContainer.getAttribute("cursor-listener")
      const side_view_place_id_list = ["place-0","place-1","place-2","place-3","place-4"]
      if(side_view_place_id_list.includes(id)){
        placesContainer.setAttribute("tour",{state:"change-view"})
        const sky_el = document.querySelector("#main-container")
        sky_el.setAttribute("material",{src:`./assets/360_images/${selected_item_id}/${id}.jpg`})
      }
    },
  });