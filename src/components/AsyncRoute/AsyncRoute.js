import React from 'react'

class AsyncRoute extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.props.loading.then(module => {
            this.component = module.default;
            this.setState({
                loading: false
            })
        })
    }

    render() {
        if (!this.state.loading) {
            return <this.component {...this.props.props} />
        }

        // React is unhappy without a return statement
        else {
            return ''
        }
    }
}

export default AsyncRoute
