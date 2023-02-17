import bannerImg from './images/store_banner.png'

const HomeBanner = () => {
    return (
        <section className='sectionContainer'>
            <div className='bannerContainer'>
                <img src={bannerImg} alt="banner image" />
            </div>
        </section>
    );
}

export default HomeBanner;
