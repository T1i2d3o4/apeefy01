 PROJET
function Responsive () {
    const isMobile = window.innerWidth <= 768;
    const isTablet =window.innerWidth > 768 && window.innerWidth <=1024;
    const isDesktop = window.innerWidth < 1024;
    const isLargeDesktop = window.innerWidth > 1200;
    const isExtraLargeDesktop = window.innerWidth > 1600;

return (
    <div className="responsive-container">
        {isMobile}
        {isTablet}
        {isDesktop}
        {isLargeDesktop}
        {isExtraLargeDesktop}
    </div>
);
}

     

    function Responsive() {
        const isMobile = window.innerWidth <= 768;
        const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024; 
        const isDesktop = window.innerWidth > 1024;
        const isLargeDesktop = window.innerWidth > 1200;
        const isExtraLargeDesktop = window.innerWidth > 1600;
        return (
            <div className="responsive-container">  
                {isMobile }
                {isTablet }
                {isDesktop }
                {isLargeDesktop }
                {isExtraLargeDesktop }
            </div>
        );
    }

                                          
    

 
  

 main
export default Responsive;