import{_ as s,o as a,c as r,a as t,t as i}from"./entry-e3d3d4e3.mjs";const c={name:"Meetup",props:{item:{type:Object}},data(){return{itemStyle:{background:`url(${this.item.imgUrl}) no-repeat center  / 100% `,backgroundHover:`linear-gradient(45deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(${this.item.imgUrl}) no-repeat  center  `}}},computed:{meetupStyleHover(){return{"--meetup-itembg":this.itemStyle.background,"--meetup-itembg--hover":this.itemStyle.backgroundHover}}}},l={class:"meetup-item",relative:""},o=["src"],n=["srcset"],m=["src","alt"],u={"z-10":""},_={class:"meetup-item__title"},d={class:"meetup-item__date"};function g(h,p,e,b,v,y){return a(),r("article",l,[t("picture",{class:"image-container",opacity:"80",src:e.item.imgUrl,quality:"80","img-attrs":{class:"object-cover absolute inset-0 w-full h-full"}},[t("source",{srcset:e.item.imgUrl,media:"(min-width: 600px)"},null,8,n),t("img",{"object-cover":"",absolute:"","inset-0":"","w-full":"","h-full":"",src:e.item.imgUrl,alt:e.item.title,height:"600",width:"600",loading:"lazy",decoding:"async"},null,8,m)],8,o),t("div",u,[t("h3",_,i(e.item.title),1),t("small",d,i(e.item.date),1)])])}var k=s(c,[["render",g]]);export{k as default};