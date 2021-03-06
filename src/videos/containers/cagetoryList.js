import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import Layout from '../components/categoryListLayout';
import Empty from '../components/empty';
import Separator from '../../sections/components/horizontalSeparetor';
import Category from '../../videos/components/category';

class CategoryList extends Component {
  keyExtractor = item => item.id.toString();
  renderEmpty = () => <Empty text="No hay elementos sugeridos ☹" />;
  itemSeparator = () => <Separator />;
  renderItem = ({item}) => {
    return <Category {...item} />;
  };
  render() {
    return (
      <Layout title="Categoría">
        <FlatList
          horizontal
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.categoryList,
  };
};

export default connect(mapStateToProps)(CategoryList);
