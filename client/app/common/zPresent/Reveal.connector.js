import Reveal from 'reveal.js';
import 'reveal.js/css/reveal.css';
import 'reveal.js/css/theme/sky.css';

/*
Import Plugins here ...
 */
import marked from 'reveal.js/plugin/markdown/marked.js';
//import markdown from 'reveal.js/plugin/markdown/markdown.js';


class revealConnector {
	constructor(){
		this.initReveal();
	}
	initReveal(){
		Reveal.initialize({
			loop: false,
			center: true,
			transition: 'default'
		});

	}
	configureReveal(){

	}
	goToSlide(number){
		Reveal.slide(0);
	}
	toMarkdown(file){
		//returns the parsed markdown

	}
}

export default revealConnector;