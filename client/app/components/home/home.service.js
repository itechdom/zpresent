/**
 * Created by osamaalghanmi on 6/4/15.
 */

let homeService = function(){
    this.getSlides = function(){
         $http.get('/slides.json').success(function(slides){
                var aSlide = {"name":"","content":""};
                slides.forEach(function(slide){
                    aSlide.name = slide
                    mySlides.push(aSlide);
                })
            })
    };
};
export default homeService;