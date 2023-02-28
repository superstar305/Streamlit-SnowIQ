import streamlit as st
from snowiq import st_custom_slider

st.set_page_config(page_title="SnowIQ", layout="wide")
v_custom = st_custom_slider('Hello world', 0, 100, '', key="slider1")
st.write(v_custom)