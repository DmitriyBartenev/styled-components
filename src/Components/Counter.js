import { Component } from 'react';
import styled from 'styled-components';

const Wrapper =styled.section`
    width:1440px;
    height:100%;
    margin: 0 auto;
`


const Counter = styled.p`
    font-size:20px;
    font-weight: bold;
`

const Button = styled.button`
    width:150px;
    height:50px;
    background-color:${props => props.primary ? 'green' : 'orange'};
    border: 1px solid #fff;
`

const ResetButton = styled(Button)`
    color:red;
`

const RandomValue = styled.button`
    /* ... */
`

const TrapButton = styled(Button)`
    color:pink;
    font-size:18px;
`



class CounterComponent extends Component{

    state = {
        count:0
    }

    onIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    onDecrement = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    onReset = () => {
        this.setState({
            count:0
        })
    }

    onRandom = () => {
        this.setState({
            count:Math.floor(Math.random()*(100 - 50) + 50),
        })
    }
    
    render() {
        return (
            <Wrapper>
                <Counter>{this.state.count}</Counter>
                <Button primary onClick={this.onIncrement}>Increment</Button>
                <Button onClick={this.onDecrement}>Decrement</Button>
                <ResetButton onClick={this.onReset}>Reset</ResetButton>
                <RandomValue onClick={this.onRandom}>Random</RandomValue>
                <TrapButton as='a' href= 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'>Click</TrapButton>
            </Wrapper>
        );
    }
}

export default CounterComponent;

