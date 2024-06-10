import './Cards.css'
function Cards(props) {
  return (
   <>
        <div className="cards"
           style={{
            boxShadow:
                 props.type == "لقاء"
                ? "10px 0 0 0 rgb(78 55 151)"
                : props.type == "معسكر"
                ? "10px 0 0 0 rgb(83, 83, 85)"
                : props.type == "برنامج"
                ? "10px 0 0 0 blue":
                // :props.start < "2023/1/1"? "10px 0 0 0 red":
                ''
          }}
          >
            
            
        
      <div className="card1"><p>{props.type}</p>
      <p>{props.title}</p>
      <p className="loc"><i class="bi bi-geo-alt-fill" ></i>
      {props.loc} <i class="bi bi-calendar2-minus"></i>
{props.time}     </p>
<p className="start"><i class="bi bi-calendar3"></i>
 
{props.start} <p className="btn"><button className='btn3'>التفاصيل</button></p>
</p>

      
      
      </div>
      
    </div>
    </>
  )
}

export default Cards
