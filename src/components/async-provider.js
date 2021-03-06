import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'mobx-react';
import {create} from 'mobx-persist';
import {isSignInPending, handlePendingSignIn, isUserSignedIn} from 'blockstack';
import BlockstackDriver from '../utils/blockstack-localforage-driver';

const hydrate = create({
  storage: BlockstackDriver
});

export default class AsyncProvider extends Component {
  static propTypes = {
    children: PropTypes.node,
    stores: PropTypes.object.isRequired
  }

  static defaultProps = {
    children: null
  }

  async componentDidMount() {
    if (isSignInPending()) {
      await handlePendingSignIn();
      return this.loadData();
    }

    if (isUserSignedIn()) {
      return this.loadData();
    }

    this.props.stores.ui.dataFinishedLoading();
  }

  loadData() {
    const {stores} = this.props;

    Promise.all(Object.entries(stores).map(([id, store]) => {
      if (store.constructor.persist) {
        return hydrate(id, store);
      }

      return null;
    })).then(() => {
      this.props.stores.ui.dataFinishedLoading();
    })
  }

  render() {
    const {children, stores} = this.props;

    return (
      <Provider {...stores}>
        {children}
      </Provider>
    );
  }
}
