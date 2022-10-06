const GoodNotification = ({ goodMessage }) => {
  
    if (goodMessage === null) {
        return null
      }
    
      return (
        <div className="good">
          {goodMessage}
        </div>
        
      )
    }
    
    export default GoodNotification