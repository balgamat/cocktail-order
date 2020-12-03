import React from 'react';
import Autosuggest from 'react-autosuggest';

// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {
    name: 'C',
    year: 1972
  },
  {
    name: 'Elm',
    year: 2012
  },
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

export class SearchIngredients extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Start typing an ingredient...',
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        theme={{
          container:                'py-12 relative flex flex-col w-full items-center justify-center',
          containerOpen:            'py-12 relative flex flex-col w-full items-center justify-center',
          input:                    'focus:ring-blue-500 focus:border-blue-500 text-3xl sm:text-xl h-16 sm:w-10/12 md:w-6/12 lg:4/12 p-6 border-gray-300 border-2 rounded-md',
          inputOpen:                'text-3xl',
          inputFocused:             '',
          suggestionsContainer:     'text-3xl',
          suggestionsContainerOpen: 'react-autosuggest__suggestions-container--open',
          suggestionsList:          'react-autosuggest__suggestions-list',
          suggestion:               'react-autosuggest__suggestion',
          suggestionFirst:          'react-autosuggest__suggestion--first',
          suggestionHighlighted:    'react-autosuggest__suggestion--highlighted',
          sectionContainer:         'react-autosuggest__section-container',
          sectionContainerFirst:    'react-autosuggest__section-container--first',
          sectionTitle:             'react-autosuggest__section-title'
        }}
      />
    );
  }
}