/*const Function = (param) => {
  let nameString = "", injectedChildren="", ageString="";
  if (param.name)
    nameString = <h1>My name is {param.name}</h1>;
  if (param.age)
    ageString = <span>Im {param.age} years old!</span>;
  if (param.children)
    injectedChildren = <p>{param.children}</p>;
    return (
        <div>
            {nameString}
            {ageString}
            {injectedChildren}
        </div>
    );
}*/

// export default Function;

const HumanObject = () => {
    let obj = [
      {
        name : "Omer", age  : "25",
      },
      {
        name : "Sheggy", age  : "26",
      },
      {
        name : "Chummi das", age : "29",
      },
      {
        name : "TT", age : "28"
      }    
    ];
    return obj;
}

export default HumanObject;