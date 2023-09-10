type HeaderParams={
    text:string;
    subtext?:string;
  }
  function Header({text,subtext}:HeaderParams){
    return ( <>
    <h1>{text}</h1>
    <h1>{subtext}</h1>
    
    </>
    

    )
  }
  export default Header;