MyComponent.propTypes = { 
    age: function (props, propName, componentName) {
        const value = props[propName]; 
        if (value < 10 || value > 20) {
            return new Error(  // 조건에 만족하지 않으면 에러메세지를 띄울 수 있음
                `Invalid prop ${propName} supplied to ${componentName}
                It must be 10 <= value <= 29.`,
            );
        }
    }
}
    
    