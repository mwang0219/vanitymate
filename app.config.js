module.exports = {
  expo: {
    name: 'vanitymate',
    slug: 'vanitymate',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    scheme: 'vanitymate',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    assetBundlePatterns: [
      '**/*'
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.vanitymate.app',
      associatedDomains: ['applinks:vanitymate.app']
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff'
      },
      package: 'com.vanitymate.app',
      intentFilters: [
        {
          action: "VIEW",
          autoVerify: true,
          data: [
            {
              scheme: "https",
              host: "*.vanitymate.app",
              pathPrefix: "/"
            },
            {
              scheme: "vanitymate",
            }
          ],
          category: ["BROWSABLE", "DEFAULT"]
        }
      ]
    },
    web: {
      favicon: './assets/favicon.png'
    },
    extra: {
      supabaseUrl: process.env.EXPO_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
      testUserId: process.env.EXPO_PUBLIC_TEST_USER_ID,
      testCategoryId: process.env.EXPO_PUBLIC_TEST_CATEGORY_ID,
      testSubcategoryId: process.env.EXPO_PUBLIC_TEST_SUBCATEGORY_ID,
    },
    // 启用新架构
    experiments: {
      tsconfigPaths: true
    },
    // 显式启用新架构
    newArchEnabled: true
  }
}; 