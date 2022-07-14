"use strict"

const text = document.querySelector(".main-text");
const down = document.querySelector(".main-down");
const texts = [`I design and develop different kind of websites for 
growing small and medium companies, so they can reach a bigger audience 
through internet, in 2022, having a stunning website is compulsory as 
your company grows, because it´s a space where you can show everything 
you want to your customers.`, 
`I offer high-quality sites, adapted to all dispositives and optimized 
for Google so when a possible customer search something related to your 
area, your site appears first, this is called SEO and big companies 
invest a lot on that, I have to be honest with you, if you are competing
in an area with really big companies, I won´t be able to surpass their SEO
(because they probably hired a SEO company for thousands of dollars), 
however, I offer good SEO optimization without extra charge. `,
`A good website also makes your company look professional, if you think 
about it, every company that you like, the ones that really stand out, 
do have a great website, as I see it, having a well created site is a 
critical step, and a clear difference between small and medium companies, 
I am here to let you reach this next level on your company, that´s the 
reason I say I make sites for GROWING small companies, because startups 
aren´t able to make a professional personalized website, `,
`of course there are a lot of drag and drop softwares which let you 
create a simple web, however, they have problems, such as little 
personalization, bad optimizations, some even have watermark! Those 
softwares could help a small company to start in this journey, and if 
your company still is not big enough to afford a professional site, 
then I reccomend you these softwares, they fulfill their purpose and let 
you at least have something. `,
`Nevertheless, when you feel you are ready to improve, upgrade and arise 
above all the competence, then contact me, I´ll make you the website you 
need to achieve your goals and be the best company of your area, you´ll 
be no longer a small startup, but a professional enterprise.`];


let counter = 0;
text.textContent = texts[counter];
down.addEventListener("click", ()=>{
    if(counter!=4){counter++;}
    else{counter = 0;}
    text.textContent = texts[counter];
})

