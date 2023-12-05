import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import BpkCalendar, {
  CALENDAR_SELECTION_TYPE,
} from '@skyscanner/backpack-web/bpk-component-calendar';
import BpkInput, {
  INPUT_TYPES,
} from '@skyscanner/backpack-web/bpk-component-input';
import BpkLoadingButton from '@skyscanner/backpack-web/bpk-component-loading-button';
import BaggageIcon from '@skyscanner/backpack-web/bpk-component-icon/sm/baggage';
import { withButtonAlignment, withRtlSupport } from '@skyscanner/backpack-web/bpk-component-icon';
import ArrowIcon from '@skyscanner/backpack-web/bpk-component-icon/sm/long-arrow-right';
import { BpkButtonV2, BUTTON_TYPES, SIZE_TYPES } from '@skyscanner/backpack-web/bpk-component-button';
import format from 'date-fns/format';

const AlignedBaggageIcon = withButtonAlignment(withRtlSupport(BaggageIcon));
const icon = <AlignedBaggageIcon />;

const AlignedArrowIcon = withButtonAlignment(withRtlSupport(ArrowIcon));

const formatDateFull = (date) => format(date, 'EEEE, do MMMM yyyy');
const formatMonth = (date) => format(date, 'MMMM yyyy');
const daysOfWeek = [
  // ... your daysOfWeek array remains unchanged
];

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      selectionConfiguration: {
        type: CALENDAR_SELECTION_TYPE.single,
        date: null,
      },
    };
  }

  handleDateSelect = (date) => {
    this.setState({
      selectionConfiguration: {
        type: this.props.selectionConfiguration.type,
        date: date,
      },
    });
  };

  render() {
    return (
      <div>
        <div>
          <BpkInput
            id="dateInput"
            type={INPUT_TYPES.text}
            name="date"
            value={(this.state.selectionConfiguration.date || '').toString()}
            placeholder="Departure date"
          />
          <BpkCalendar
            id="calendar"
            onDateSelect={this.handleDateSelect}
            formatMonth={formatMonth}
            formatDateFull={formatDateFull}
            daysOfWeek={daysOfWeek}
            weekStartsOn={1}
            changeMonthLabel="Change month"
            nextMonthLabel="Next month"
            previousMonthLabel="Previous month"
            selectionConfiguration={this.state.selectionConfiguration}
          />
        </div>
        <div>
          {/* BpkLoadingButton examples */}
          {/* ... Previous BpkLoadingButton examples */}
          {/* BpkButtonV2 examples */}
          <BpkButtonV2>Continue</BpkButtonV2>
        </div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Flight Schedule 
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </div>
    );
  }
}
