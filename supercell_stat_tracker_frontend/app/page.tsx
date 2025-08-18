import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Track Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Supercell</span>
              <br />
              Gaming Stats
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Monitor your progress across Clash of Clans, Clash Royale, and Brawl Stars. 
              Analyze your performance, track achievements, and compete with friends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/register" 
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started Free
              </Link>
              <Link 
                href="/login" 
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Supported Games
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Track your stats across all your favorite Supercell games
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Clash of Clans Card */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-xl p-8 border border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Clash of Clans</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Track your village progress, war statistics, and clan achievements
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 mb-6">
                  <li>• Town Hall level tracking</li>
                  <li>• War win/loss ratio</li>
                  <li>• Clan contributions</li>
                  <li>• Trophy progression</li>
                </ul>
                <Link 
                  href="/clashOfClans" 
                  className="inline-block px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
                >
                  View Stats
                </Link>
              </div>
            </div>

            {/* Clash Royale Card */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 rounded-xl p-8 border border-red-200 dark:border-red-800 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚔️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Clash Royale</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Monitor your battle performance, card levels, and arena progression
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 mb-6">
                  <li>• Battle win rates</li>
                  <li>• Card collection progress</li>
                  <li>• Arena progression</li>
                  <li>• Tournament results</li>
                </ul>
                <Link 
                  href="/clashRoyale" 
                  className="inline-block px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
                >
                  View Stats
                </Link>
              </div>
            </div>

            {/* Brawl Stars Card */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-8 border border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Brawl Stars</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Analyze your brawler performance, trophy counts, and game modes
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 mb-6">
                  <li>• Brawler trophy counts</li>
                  <li>• Game mode statistics</li>
                  <li>• Power level tracking</li>
                  <li>• Star power progress</li>
                </ul>
                <Link 
                  href="/brawlStars" 
                  className="inline-block px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
                >
                  View Stats
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Stat Tracker?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Comprehensive analytics and insights for serious gamers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Detailed Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Comprehensive statistics and performance metrics for every game
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Team Tracking</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Monitor your clan, team, and friend progress all in one place
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Progress Tracking</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Visualize your improvement over time with detailed progress charts
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Achievement System</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Track milestones and unlock achievements as you progress
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Track Your Gaming Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of players who are already improving their game with detailed analytics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Tracking Now
            </Link>
            <Link 
              href="/login" 
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
