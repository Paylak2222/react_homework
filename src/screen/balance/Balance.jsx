import { useContext } from "react"
import TranslateContext from "../../components/translate-context/TranslateContext"


export default function(){
    const t = useContext(TranslateContext).lang;
    return(
        <>  <div className="balanc">
                <h3>{t.balanc}</h3>
                <div className="rubli">
                    <h1>1 058,68 Р</h1>
                    <button>{t.rubli}</button>
                </div>
                <h5>{t.history}</h5>
                <div className="post_title bal">
                    <span>{t.today}</span>
                    <span>{t.month}</span>
                    <span>{t.all}</span>
                </div>
                <div className="payment">
                    <div className="payment_logo"></div>
                    <span>10.03.2021</span>
                    <div className="con">
                       <span>{t.popolnenie}</span> 
                    </div>          
                    <div className="price">
                         <h4>+ 560,00 Р</h4>
                    </div>
                </div>
                <div className="payment">
                    <div className="payment_logo_user"></div>
                    <span>10.03.2021</span>
                    <div className="con">
                       <span>{t.oplota}</span> 
                    </div>          
                    <div className="price">
                         <h6>- 900,00 Р</h6>
                    </div>
                </div>
                <div className="payment">
                    <div className="payment_logo_user"></div>
                    <span>10.03.2021</span>
                    <div className="con">
                       <span>{t.oplota}</span> 
                    </div>          
                    <div className="price">
                         <h6>- 900,00 Р</h6>
                    </div>
                </div>
                <div className="payment">
                    <div className="payment_logo"></div>
                    <span>10.03.2021</span>
                    <div className="con">
                       <span>{t.popolnenie}</span> 
                    </div>          
                    <div className="price">
                         <h4>+ 560,00 Р</h4>
                    </div>
                </div>
            </div>
            
        </>
    )
}