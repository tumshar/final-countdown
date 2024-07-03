import { useRouteError } from "react-router-dom";


const Error=()=>{
    const err=useRouteError();
    return(
       

        <div>
          
          <h1> Reality is often disappointing</h1>
          <h1> {err.status} : {err.statusText}</h1>
          <img  className="thanos-image " src="https://64.media.tumblr.com/89db2bc09eb01e1e1cd663c5e75b45b6/a6f5bdc9a219fd4b-6c/s2048x3072/4d11a104f6634784586702effd1ce3cb1efa2855.jpg"
          alt="you have entered wrong data">
          </img> 
        
          



        </div>
    );
};

export default Error;