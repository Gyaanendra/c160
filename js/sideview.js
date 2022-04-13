AFRAME.registerComponent("place-side-view",{
    init:function(){
        this.create_places()
    },

    tick:function(){
        const placesContainer= document.querySelector("#places-container")
        const {state} = placesContainer.getAttribute("tour")
        if (state === "view" || state === "change-view" ){
            this.el.setAttribute("visible",true)
        }else{
            this.el.setAttribute("visible",false)
        }
        
    },

    create_places:function(){
        const side_view_container = document.querySelector("#side-view-container");

        let previousXPosition= -80 
        let previousYPosition= 20

        for(var i=0;i<=4;i++){
            const position ={
                x:(previousXPosition+=30),
                y:(previousYPosition+=2),
                z:-40
            }     
            const EL = this.create_places_thumbnail(position,i)
            side_view_container.appendChild(EL)
            
        }
    },

    create_places_thumbnail:function(position, id){
        const EL = document.createElement("a-entity");

        EL.setAttribute("visible",true)
        EL.setAttribute("id",`places-${id}`)
        EL.setAttribute("geometry",{primitive:"circle",radius:2.5,})
        EL.setAttribute("material",{ src:"./assets/helicopter.png"})
        EL.setAttribute("position",position)
        EL.setAttribute("cursor-listener",{})

        return EL;

    },
})