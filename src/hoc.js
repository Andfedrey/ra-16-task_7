import React from 'react'

export default function hoc(Component, ComponentForNew, ComponentForPopular) {
  return class newVideos extends React.Component {
    render(){
      const {views} = this.props;
      console.log(views);
      return(
        <>
          {
            (views > 1000) ? 
            (
              <ComponentForNew>
                <Component {...this.props}></Component>
              </ComponentForNew>
            ): 
            (
              <ComponentForPopular>
                <Component {...this.props}></Component>
              </ComponentForPopular>
            )
          }
        </>
      )
    }
  }
}
