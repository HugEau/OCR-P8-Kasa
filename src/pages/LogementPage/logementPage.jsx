import ImgRoller from "../../components/ImgRoller/imgRoller"
import ContentRoller from "../../components/ContentRoller/contentRoller"
import '../../styles/logementPage.scss'
import filledStar from "../../assets/filledStar.svg"
import emptyStar from "../../assets/emptyStar.svg"


function LogementPage( LogementItem ) {
    let rating = +LogementItem.rating
    function itemRating(rating) {
        const stars = [];
        
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars.push(<img key={i} src={filledStar} alt="filledStar" />);
            } else {
                stars.push(<img key={i} src={emptyStar} alt="emptyStar" />);
            }
        }
    
        return stars;
    }
    return ( 
        <div className="body">
            <main>
                <div className="logementPage">
                    <ImgRoller images={ LogementItem.pictures } />
                    <div className="logementPage__content">
                        <div className="logementPage__contentTop">
                            <div className="logementPage__contentTop--titleLocate">
                                <h1 className="logementPage__contentTop--titleLocate--title">{ LogementItem.title }</h1>
                                <p className="logementPage__contentTop--titleLocate--location">{ LogementItem.location }</p>
                                <div className="logementPage__contentTop--titleLocate--tags">
                                    {LogementItem.tags.map((tag, index) => (
                                        <p key={index}> {tag} </p>
                                    ))}
                                </div>
                            </div>
                            <div className="logementPage__contentTop--nameRating">
                                <div className="logementPage__contentTop--nameRating--name">
                                    <p>{LogementItem.host.name}</p>
                                    <img src={LogementItem.host.picture} alt="host"/>
                                </div>
                                <div className="logementPage__contentTop--nameRating--rating">
                                    {itemRating(rating)}
                                </div>
                            </div>
                        </div>
                        <div className="logementPage__contentBottom">
                            <ContentRoller title={'Description'} content={LogementItem.description}/>
                            <ContentRoller title={'Équipement'} content={LogementItem.equipments}/>
                        </div>
                    </div>
                </div>
            </main>
        </div>   
    )
}

export default LogementPage