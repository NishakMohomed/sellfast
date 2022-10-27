function click(){
    let c = document.querySelector('.about_data')
    let moreText = document.querySelector('.more')
    
    if(c?.className.includes('view')){
        c?.classList.remove('view');
        if(moreText){
            moreText.textContent = 'Show more'
        }
    }else{
        c?.classList.add('view')
        if(moreText){
            moreText.textContent = 'Show less'
        }
    }
}

const About = () => {
    return(
        <>
        <div className="about_container">
            <div className="about_data">
                <p className="about_heading">
                    About sellfast.lk, The Largest Marketplace in Sri Lanka!
                </p>

                <p className="about_content">
                    Sri Lanka&apos;s household name for buying and selling anything to everything online. Do you want to buy a property? Check sellfast! Do you want to sell a bike? Check sellfast. <br /> <br />

                    sellfast has the widest selection of items across Sri Lanka and over 50 different categories. Whether you&apos;re looking for a car, mobile phone, house, computer or pet, you will find the best deal on sellfast. Our search and filters make it easy to find precisely what you&apos;re looking for!
                </p>

                <p className="about_heading">
                    Buy, Sell New and Used Items Or Land Jobs Through sellfast
                </p>

                <p className="about_content">
                    Every month hundreds of new users use sellfast. SME&apos;s and small businesses signup for memberships. You can search & filter products & services from the comfort of your own home. <br /> <br />

                    As one of the free advertising sites in Sri Lanka it has helped many people to find their favourite phones, pets, cars, and properties. Or even the dream job through classified ads in no time. This feature on sellfast makes it easy for you to find exactly what you&apos;re looking for and saves time. <br /> <br />

                    You can sign up for a free account to start selling your items. It takes less than 2 minutes to post an ad. Visit How to sell fast for some tips on creating great ads that generate a lot of buyer interest. It goes without saying that when you have the membership, you are automatically entitled to more perks. <br /> <br />

                    If you have many items to sell, a membership would be the ideal choice. We also have some great tools that help make your ad stand out. Check out the Ad Promotions page for more information. 
                </p>

                <p className="about_heading">
                    Perks Of Online shopping On sellfast
                </p>

                <p className="about_content">
                    There are free advertising sites in Sri Lanka but finding the top-ranking one like sellfast isn&apos;t a hard shot. Whether you want to buy used items or sell used items, you only have minutes of procedures for it all. Type sri lanka buy and sell, and you&apos;ll see sellfast on top searches. People prefer it over other free advertising sites Sri Lanka because: <br /> <br />

                    <span>Effortless navigation</span> — as soon as you see a free classified website, you don&apos;t feel you&apos;ll get quality services, but sellfast proves you wrong. Suppose you want to sell new items or buy new items. You just have to read through the instructions about Post ads free and follow them. Once you do, you&apos;ll have your ad up and running. All under a few minutes, and that&apos;s how navigation works; faster, simpler, and minimal. <br /> <br />

                    <span>Secure and Safe Shopping</span> — Buy online or sell online is only good as long as classified sites are ready to provide secure and safe shopping. You can even use the location selector to find deals close to you or check out ads to have items delivered directly to you with 100% buyer protection. The site&apos;s been around for years because it has earned the users&apos; trust.
                </p>
            </div>

            <p className="more" onClick={click}>
                Show more
            </p>

        </div>
    </>
    )
}

export default About