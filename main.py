import pandas as pd
import pickle

# Load the saved model
model = pickle.load(open('model.pkl', 'rb'))

# Create a function to predict home prices
def predict_home_price(LB, LT, KT, KM, GRS):
    data = {'LB': LB, 'LT': LT, 'KT': KT, 'KM': KM, 'GRS': GRS}
    df = pd.DataFrame(data, index=[0])
    predicted_price = model.predict(df)[0]
    return predicted_price
