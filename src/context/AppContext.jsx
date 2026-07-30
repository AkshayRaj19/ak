import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('humanlly_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('humanlly_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('humanlly_theme') === 'dark';
  });

  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync Cart
  useEffect(() => {
    localStorage.setItem('humanlly_cart', JSON.stringify(cart));
  }, [cart]);

  // Sync Wishlist
  useEffect(() => {
    localStorage.setItem('humanlly_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Sync Theme
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.documentElement.setAttribute('data-bs-theme', 'dark');
      localStorage.setItem('humanlly_theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      document.documentElement.setAttribute('data-bs-theme', 'light');
      localStorage.setItem('humanlly_theme', 'light');
    }
  }, [darkMode]);

  const showToast = (title, message) => {
    setToastMessage({ title, message, id: Date.now() });
    setTimeout(() => setToastMessage(null), 3000);
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
    showToast('Theme Changed', `Switched to ${!darkMode ? 'Dark' : 'Light'} Mode.`);
  };

  const addToCart = (product, quantity = 1) => {
    setCart(prevCart => {
      const existingIndex = prevCart.findIndex(item => item.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [...prevCart, { product, quantity }];
    });
    showToast('Added to Cart', `${product.name} has been added to your shopping bag.`);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
    showToast('Removed Item', 'Item removed from your shopping bag.');
  };

  const updateCartQuantity = (productId, delta) => {
    setCart(prevCart => {
      return prevCart.map(item => {
        if (item.product.id === productId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const toggleWishlist = (productId, productName = 'Item') => {
    setWishlist(prev => {
      const isAlready = prev.includes(productId);
      if (isAlready) {
        showToast('Removed from Wishlist', `${productName} removed from your wishlist.`);
        return prev.filter(id => id !== productId);
      } else {
        showToast('Saved to Wishlist', `${productName} saved to your wishlist.`);
        return [...prev, productId];
      }
    });
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalCartPrice = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  return (
    <AppContext.Provider value={{
      cart,
      wishlist,
      darkMode,
      quickViewProduct,
      isSearchOpen,
      isCartOpen,
      toastMessage,
      totalCartCount,
      totalCartPrice,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      toggleWishlist,
      toggleDarkMode,
      setQuickViewProduct,
      setIsSearchOpen,
      setIsCartOpen,
      showToast
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
