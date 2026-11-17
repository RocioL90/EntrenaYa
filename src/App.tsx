import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import KitRecommender from "./components/KitRecommender";
import TrainingContent from "./components/TrainingContent";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import type { Product } from "./data/products";
import type { Kit } from "./data/kits";
import { products } from "./data/products";

interface CartItem {
  product: Product;
  quantity: number;
}

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [homeDetailProduct, setHomeDetailProduct] = useState<Product | null>(
    null,
  );
  const [isHomeDetailOpen, setIsHomeDetailOpen] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    showNotification(`${product.name} agregado al carrito`);
  };

  const addKitToCart = (kit: Kit) => {
    kit.productIds.forEach((productId) => {
      const product = products.find((p) => p.id === productId);
      if (product) {
        addToCart(product);
      }
    });
    showNotification(`Kit "${kit.name}" agregado al carrito`);
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item,
      ),
    );
  };

  const removeItem = (productId: number) => {
    setCartItems((prev) =>
      prev.filter((item) => item.product.id !== productId),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleViewTraining = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage("training");
  };

  const navigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Hero onNavigate={navigate} />
            <section className="bg-gray-800 py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    ¿Por qué EntrenaYa?
                  </h2>
                  <p className="text-gray-400">
                    Más que una tienda, tu compañero de entrenamiento
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700 text-center">
                    <div className="text-4xl mb-3">🎯</div>
                    <h3 className="text-white font-bold mb-2">
                      Kits Personalizados
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Motor de recomendación que te sugiere el equipamiento
                      ideal según tus objetivos de entrenamiento.
                    </p>
                  </div>
                  <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700 text-center">
                    <div className="text-4xl mb-3">📋</div>
                    <h3 className="text-white font-bold mb-2">
                      Entrenamiento Incluido
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Cada producto viene con rutinas y contenido de
                      entrenamiento para que aproveches al máximo tu compra.
                    </p>
                  </div>
                  <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700 text-center">
                    <div className="text-4xl mb-3">🚀</div>
                    <h3 className="text-white font-bold mb-2">
                      Acompañamiento
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Te guiamos en cada paso: desde elegir tu primer
                      equipamiento hasta alcanzar tus metas fitness.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-900 py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    Productos Destacados
                  </h2>
                  <button
                    onClick={() => navigate("catalog")}
                    className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
                  >
                    Ver todos →
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {products.slice(0, 4).map((product) => (
                    <div
                      key={product.id}
                      className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-orange-500/50 transition-all cursor-pointer"
                      onClick={() => {
                        setHomeDetailProduct(product);
                        setIsHomeDetailOpen(true);
                      }}
                    >
                      <div className="text-4xl text-center mb-3">
                        {product.image}
                      </div>
                      <h4 className="text-white text-sm font-medium mb-1">
                        {product.name}
                      </h4>
                      <p className="text-orange-400 font-bold">
                        ${product.price.toLocaleString("es-AR")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <ProductDetail
              product={homeDetailProduct}
              isOpen={isHomeDetailOpen}
              onClose={() => setIsHomeDetailOpen(false)}
              onAddToCart={addToCart}
              onViewTraining={handleViewTraining}
            />

            <section className="bg-gradient-to-r from-orange-500 to-red-500 py-12">
              <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  ¿No sabés por dónde empezar?
                </h2>
                <p className="text-white/80 mb-6">
                  Hacé nuestro test rápido y te recomendamos el kit perfecto
                  para vos
                </p>
                <button
                  onClick={() => navigate("kits")}
                  className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-3 rounded-xl font-bold text-lg transition-colors"
                >
                  🧠 Hacer el Test
                </button>
              </div>
            </section>
          </>
        );
      case "catalog":
        return (
          <Catalog
            onAddToCart={addToCart}
            onViewTraining={handleViewTraining}
          />
        );
      case "kits":
        return <KitRecommender onAddKitToCart={addKitToCart} />;
      case "training":
        return (
          <TrainingContent
            selectedProduct={selectedProduct}
            onAddToCart={addToCart}
          />
        );
      default:
        return <Hero onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar
        cartItems={cartItems}
        onCartClick={() => setIsCartOpen(true)}
        currentPage={currentPage}
        onNavigate={navigate}
      />

      {notification && (
        <div className="fixed top-20 right-4 z-50 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-pulse text-sm font-medium">
          ✓ {notification}
        </div>
      )}

      {renderPage()}

      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onClearCart={clearCart}
      />
    </div>
  );
}

export default App;
