/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';

const React = require('react');
const {Switch, Text, View, Platform} = require('react-native');

type OnOffIndicatorProps = $ReadOnly<{|on: boolean, testID: string|}>;
function OnOffIndicator({on, testID}: OnOffIndicatorProps) {
  return <Text testID={testID}>{on ? 'On' : 'Off'}</Text>;
}

type ExampleRowProps = $ReadOnly<{|children: React.Node|}>;
function ExampleRow({children}: ExampleRowProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
      }}>
      {children}
    </View>
  );
}

type SimpleSwitchExampleState = $ReadOnly<{|
  trueSwitchIsOn: boolean,
  falseSwitchIsOn: boolean,
|}>;

class BasicSwitchExample extends React.Component<
  {||},
  SimpleSwitchExampleState,
> {
  state: SimpleSwitchExampleState = {
    trueSwitchIsOn: true,
    falseSwitchIsOn: false,
  };

  render(): React.Node {
    return (
      <View>
        <ExampleRow>
          <Switch
            testID="on-off-initial-off"
            onValueChange={value => this.setState({falseSwitchIsOn: value})}
            trackColor={{
              true: 'yellow',
              false: 'purple',
            }}
            value={this.state.falseSwitchIsOn}
          />
          <OnOffIndicator
            on={this.state.falseSwitchIsOn}
            testID="on-off-initial-off-indicator"
          />
        </ExampleRow>
        <ExampleRow>
          <Switch
            testID="on-off-initial-on"
            onValueChange={value => this.setState({trueSwitchIsOn: value})}
            value={this.state.trueSwitchIsOn}
          />
          <OnOffIndicator
            on={this.state.trueSwitchIsOn}
            testID="on-off-initial-on-indicator"
          />
        </ExampleRow>
      </View>
    );
  }
}

class DisabledSwitchExample extends React.Component<
  {||},
  SimpleSwitchExampleState,
> {
  state: SimpleSwitchExampleState = {
    trueSwitchIsOn: true,
    falseSwitchIsOn: false,
  };

  render(): React.Node {
    return (
      <View>
        <ExampleRow>
          <Switch
            testID="disabled-initial-off"
            disabled={true}
            onValueChange={value => this.setState({falseSwitchIsOn: value})}
            value={this.state.falseSwitchIsOn}
          />

          <OnOffIndicator
            on={this.state.falseSwitchIsOn}
            testID="disabled-initial-off-indicator"
          />
        </ExampleRow>

        <ExampleRow>
          <Switch
            testID="disabled-initial-on"
            disabled={true}
            onValueChange={value => this.setState({trueSwitchIsOn: value})}
            value={this.state.trueSwitchIsOn}
          />

          <OnOffIndicator
            on={this.state.trueSwitchIsOn}
            testID="disabled-initial-on-indicator"
          />
        </ExampleRow>
      </View>
    );
  }
}

class ColorSwitchExample extends React.Component<{...}, $FlowFixMeState> {
  state: any | {colorFalseSwitchIsOn: boolean, colorTrueSwitchIsOn: boolean} = {
    colorTrueSwitchIsOn: true,
    colorFalseSwitchIsOn: false,
  };

  render(): React.Node {
    return (
      <View>
        <Switch
          testID="initial-false-switch"
          onValueChange={value => this.setState({colorFalseSwitchIsOn: value})}
          style={{marginBottom: 10}}
          thumbColor="#0000ff"
          trackColor={{
            false: '#ff0000',
            true: '#00ff00',
          }}
          value={this.state.colorFalseSwitchIsOn}
        />
        <Switch
          testID="initial-true-switch"
          onValueChange={value => this.setState({colorTrueSwitchIsOn: value})}
          thumbColor="#0000ff"
          trackColor={{
            false: '#ff0000',
            true: '#00ff00',
          }}
          value={this.state.colorTrueSwitchIsOn}
        />
      </View>
    );
  }
}

class EventSwitchExample extends React.Component<{...}, $FlowFixMeState> {
  state: any | {eventSwitchIsOn: boolean, eventSwitchRegressionIsOn: boolean} =
    {
      eventSwitchIsOn: false,
      eventSwitchRegressionIsOn: true,
    };

  render(): React.Node {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View>
          <Switch
            testID="event-switch-top"
            onValueChange={value => this.setState({eventSwitchIsOn: value})}
            style={{marginBottom: 10}}
            value={this.state.eventSwitchIsOn}
          />
          <Switch
            testID="event-switch-bottom"
            onValueChange={value => this.setState({eventSwitchIsOn: value})}
            style={{marginBottom: 10}}
            value={this.state.eventSwitchIsOn}
          />
          <Text testID="event-switch-indicator">
            {this.state.eventSwitchIsOn ? 'On' : 'Off'}
          </Text>
        </View>
        <View>
          <Switch
            testID="event-switch-regression-top"
            onValueChange={value =>
              this.setState({eventSwitchRegressionIsOn: value})
            }
            style={{marginBottom: 10}}
            value={this.state.eventSwitchRegressionIsOn}
          />
          <Switch
            testID="event-switch-regression-bottom"
            onValueChange={value =>
              this.setState({eventSwitchRegressionIsOn: value})
            }
            style={{marginBottom: 10}}
            value={this.state.eventSwitchRegressionIsOn}
          />
          <Text testID="event-switch-regression-indicator">
            {this.state.eventSwitchRegressionIsOn ? 'On' : 'Off'}
          </Text>
        </View>
      </View>
    );
  }
}

class IOSBackgroundColEx extends React.Component<{...}, $FlowFixMeState> {
  state: any | {iosBackgroundColor: string} = {
    iosBackgroundColor: '#ffa500',
  };

  render(): React.Node {
    return (
      <View>
        <Switch
          disabled
          ios_backgroundColor={this.state.iosBackgroundColor}
          style={{marginBottom: 20}}
        />
        <Text>
          The background color can be seen either when the switch value is false
          or when the switch is disabled (and the switch is translucent).{' '}
        </Text>
      </View>
    );
  }
}

class OnChangeExample extends React.Component<{...}, $FlowFixMeState> {
  render(): React.Node {
    return (
      <View>
        <Switch
          onChange={() => {
            // eslint-disable-next-line no-alert
            alert('OnChange Called');
          }}
        />
      </View>
    );
  }
}

class ContainerBackgroundColorStyleExample extends React.Component<
  {...},
  $FlowFixMeState,
> {
  render(): React.Node {
    return (
      <View>
        <Switch
          style={{backgroundColor: 'blue'}}
          thumbColor="white"
          value={true}
        />
      </View>
    );
  }
}

type AccessibilitySwitchExampleState = $ReadOnly<{|
  switchValue: boolean,
  noFocusableValue: boolean,
  noAccessibileValue: boolean,
  noFocusValue: boolean,
|}>;

class AccessibilitySwitchExample extends React.Component<
  {||},
  AccessibilitySwitchExampleState,
> {
  state: AccessibilitySwitchExampleState = {
    switchValue: true,
    noFocusableValue: true,
    noAccessibileValue: true,
    noFocusValue: true,
  };

  render(): React.Node {
    return (
      <View testID="accessibility-switch">
        <ExampleRow>
          <Switch
            accessibilityLabel="This is a Switch"
            accessibilityHint="Switch"
            nativeID="accessibility-switch"
            onValueChange={value => this.setState({switchValue: value})}
            value={this.state.switchValue}
          />
          <Switch
            accessibilityLabel="This is a Switch with focusable set to false"
            accessibilityHint="Switch"
            // focusable={false}
            onValueChange={value => this.setState({noFocusableValue: value})}
            value={this.state.noFocusableValue}
          />
        </ExampleRow>
        <ExampleRow>
          <Switch
            accessibilityLabel="This is a Switch with accessible set to false"
            accessibilityHint="Switch"
            // accessible={false}
            onValueChange={value => this.setState({noAccessibleValue: value})}
            value={this.state.noAccessibleValue}
          />
          <Switch
            accessibilityLabel="This is a Switch with focusable and accessible set to false"
            accessibilityHint="Switch"
            // focusable={false}
            // accessible={false}
            onValueChange={value => this.setState({noFocusValue: value})}
            value={this.state.noFocusValue}
          />
        </ExampleRow>
      </View>
    );
  }
}

exports.title = 'Switch';
exports.documentationURL = 'https://reactnative.dev/docs/switch';
exports.category = 'UI';
exports.displayName = 'SwitchExample';
exports.description = 'Native boolean input';
exports.examples = [
  {
    title: 'Switches can be set to true or false',
    name: 'basic',
    render(): React.Element<any> {
      return <BasicSwitchExample />;
    },
  },
  {
    title: 'Switches can be disabled',
    name: 'disabled',
    render(): React.Element<any> {
      return <DisabledSwitchExample />;
    },
  },
  {
    title: 'Change events can be detected',
    name: 'events',
    render(): React.Element<any> {
      return <EventSwitchExample />;
    },
  },
  {
    title: 'Switches are controlled components',
    name: 'controlled',
    render(): React.Element<any> {
      return <Switch testID="controlled-switch" />;
    },
  },
  {
    title: 'Custom colors can be provided',
    name: 'custom-colors',
    render(): React.Element<any> {
      return <ColorSwitchExample />;
    },
  },
  {
    title: 'OnChange receives the change event as an argument',
    render(): React.Element<any> {
      return <OnChangeExample />;
    },
  },
  {
    title: "The container's background color can be set",
    render(): React.Element<any> {
      return <ContainerBackgroundColorStyleExample />;
    },
  },
  {
    title: 'Switches can have customized accessibility',
    render(): React.Element<any> {
      return <AccessibilitySwitchExample />;
    },
  },
];

if (Platform.OS === 'ios') {
  exports.examples.push({
    title: '[iOS Only] Custom background colors can be set',
    render(): React.Element<any> {
      return <IOSBackgroundColEx />;
    },
  });
}
