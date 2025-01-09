import img from '../assets/helpersimage.webp'
function HomeSection() {
  return (
    <div>
      <div className="d-flex" style={{height:"50px"}}>
        <div>
            We are together, we can thrive. Nothing can stop us, if we merely try.
        </div>
        <div>
            <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomeSection
