const ProductCard = ({ product }) => {
  const [timeRemaining, setTimeRemaining] = useState(0);

  useEffect(() => {
    const expirationTime = moment().add(Math.floor(Math.random() * 3) + 1, 'minutes');
    const timer = setInterval(() => {
      const currentTime = moment();
      const diff = expirationTime.diff(currentTime);
      const remaining = Math.max(diff, 0);
      setTimeRemaining(remaining);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleClick = () => {
    if (timeRemaining > 0) {
      // Navigate to product detail page
      window.location.href = `/detail/${product.id}`;
    }
  };

  return (
    <div className="product-card" onClick={handleClick}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      {timeRemaining > 0 ? (
        <p>Time remaining: {moment.utc(timeRemaining).format('mm:ss')}</p>
      ) : (
        <p>Time expired</p>
      )}
    </div>
  );
};

export default ProductCard;

