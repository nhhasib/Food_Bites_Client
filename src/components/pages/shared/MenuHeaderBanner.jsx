import React from 'react';

const MenuHeaderBanner = ({img, title,text}) => {
    return (
        <div className="hero h-[500px] bg-fixed" style={{ backgroundImage: `url("${img}")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content bg-black p-20 bg-opacity-40">
    <div className="max-w-md">
                    <h1 className={`mb-5 ${text} font-bold uppercase`}>{ title}</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
   
    </div>
  </div>
</div>
    );
};

export default MenuHeaderBanner;
