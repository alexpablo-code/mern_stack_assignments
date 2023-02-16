import bannerImg from './images/home_banner.jpg'

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
