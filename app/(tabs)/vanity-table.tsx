import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { PageHeader } from '@/components/PageHeader';
import { CategoryCard } from '@/components/vanity-table/CategoryCard';
import { AllProductsCard } from '@/components/vanity-table/AllProductsCard';
import { router } from 'expo-router';
import { ProductCategory } from '@/types/products';

const categories = [
  {
    id: 'MAKEUP',
    name: '彩妆',
    count: 8,
    colors: ['#FFB6C1', '#FF69B4'],
    icon: 'palette',
    subCategories: [ProductCategory.BASE, ProductCategory.EYE, ProductCategory.LIP]
  },
  {
    id: ProductCategory.SKINCARE,
    name: '护肤',
    count: 12,
    colors: ['#E6E6FA', '#9370DB'],
    icon: 'spa',
  },
  {
    id: ProductCategory.FRAGRANCE,
    name: '香水',
    count: 3,
    colors: ['#98FB98', '#3CB371'],
    icon: 'opacity',
  },
  {
    id: ProductCategory.TOOLS,
    name: '工具',
    count: 5,
    colors: ['#87CEEB', '#4169E1'],
    icon: 'brush',
  }
];

export default function VanityTableScreen() {
  const handleCategoryPress = (categoryId: string) => {
    if (categoryId === 'MAKEUP') {
      router.push({
        pathname: '/products',
        params: { 
          category: 'MAKEUP',
          subCategories: JSON.stringify([ProductCategory.BASE, ProductCategory.EYE, ProductCategory.LIP])
        }
      });
    } else {
      router.push({
        pathname: '/products',
        params: { category: categoryId }
      });
    }
  };

  const handleAllProductsPress = () => {
    router.push({
      pathname: '/products',
      params: { category: 'all' }
    });
  };

  const totalProducts = categories.reduce((sum, category) => sum + category.count, 0);
  
  return (
    <SafeAreaView style={styles.container}>
      <PageHeader 
        title="我的美妆桌" 
        subtitle={`共收录${totalProducts}件产品`} 
      />
      <View style={styles.content}>
        <View style={styles.categoryGrid}>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              count={category.count}
              colors={category.colors}
              icon={category.icon}
              onPress={() => handleCategoryPress(category.id)}
            />
          ))}
        </View>
        <AllProductsCard
          count={totalProducts}
          onPress={handleAllProductsPress}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  categoryGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
}); 