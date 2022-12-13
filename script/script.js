import Card from "./modules/skills.js";
import listSkill from './modules/listSkill.js'
import animaScroll from './modules/animaScroll.js'
import slider from './modules/slider.js'
import activeIcon from "./modules/activeIconScrollMenu.js";



const scrollAnima = animaScroll('[data-anima]')
scrollAnima()
const skillList =listSkill()
const cardSkill = new Card('.conteudo-skill','.skill-text p',skillList)
cardSkill.init()
activeIcon()
slider('.cards','.spin')
slider('.skill-card', '.spinCard')



















