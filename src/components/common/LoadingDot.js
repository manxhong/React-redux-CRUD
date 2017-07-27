import React,{PropTypes} from 'react';

class LoadingDot extends React.Component{
  constructor(props, context){
    super(props, context);
  }

  render(){
    return(
      <div></div>
    );
  }
}

LoadingDot.propTypes={
  //myProp: PropTypes.string.isRequired
};


export default LoadingDot;
