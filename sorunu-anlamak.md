# Sorunu Anlamak:
1. 1 butonuna basılmasından, güncellenen değerimizin render edilmesine kadar olan uygulama adımları nelerdir? 
Her adım için kodun hangi bölümünün geçerli olduğunu listeleyin.


* Kullanıcı 1 butonuna tıkladı.
<CalcButton value={1} onClick={handleAddOneClick} />

* Butonun onClick event’i handleAddOneClick fonksiyonunu çağırdı.

const handleAddOneClick = () => {
    dispatch(addOne());
};

* handleAddOneClick, dispatch(addOne()) ile Redux’a action gönderdi.

* Redux reducer, ADD_ONE action’ını işleyerek total değerini artırdı.

case ADD_ONE:
  return {
    ...state,
    total: state.total + 1
  };

* TotalDisplay total artı 1'i gösterdi.

const TotalDisplay = ({ value }) => {
  return <div className="total-display">{value}</div>;
};