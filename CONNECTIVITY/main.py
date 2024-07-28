import sqlite3
from datetime import datetime

conn=sqlite3.connect("MYCARTsys.db")
cursor=conn.cursor()


try:
    customer_table=f"""
    CREATE TABLE IF NOT EXISTS CUSTOMER(
    CUS_ID INTEGER PRIMARY KEY AUTOINCREMENT ,
    CUS_NAME VARCHAR(20),
    CUS_AGE INT,
    CUS_MOB VARCHAR(12)
    );
    """
    cursor.execute(customer_table)
    conn.commit()
except Exception as e:
    print(e)


try:
    product_table=f"""
    CREATE TABLE IF NOT EXISTS PRODUCTS(
    PROD_ID INTEGER PRIMARY KEY AUTOINCREMENT ,
    PROD_NAME VARCHAR(20),
    PROD_PRICE INT,
    PROD_DESC TEXT
    );
    """
    cursor.execute(product_table)
    conn.commit()
except Exception as e:
    print(e)


try:
    mycart_table=f"""
    CREATE TABLE IF NOT EXISTS MY_CART(
    CART_ID INTEGER PRIMARY KEY AUTOINCREMENT ,
    CUS_ID INT,
    PROD_ID INT,
    QUANTITY INT,
    FOREIGN KEY (CUS_ID) REFERENCES CUSTOMER(CUS_ID),
    FOREIGN KEY (PROD_ID) REFERENCES PRODUCTS(PROD_ID)
    );
    """
    cursor.execute(mycart_table)
    conn.commit()
except Exception as e:
    print(e)


try:
    myorder_table=f"""
    CREATE TABLE IF NOT EXISTS MY_ORDERS(
    ORD_ID INTEGER PRIMARY KEY AUTOINCREMENT ,
    CUS_ID INT,
    PROD_ID INT,
    TOTAL_PRICE INT,
    ORDER_DATE VARCHAR(50),
    FOREIGN KEY (CUS_ID) REFERENCES CUSTOMER(CUS_ID),
    FOREIGN KEY (PROD_ID) REFERENCES PRODUCTS(PROD_ID)
    );
    """
    cursor.execute(myorder_table)
    conn.commit()
except Exception as e:
    print(e)


def create_customer():
    try:
        cus_name=input("Enter your name :")
        cus_age=int(input("Enter your age :"))
        cus_mob=input("ENTER YOUR MOB NO :")
        insert_customer=f"""
        INSERT INTO CUSTOMER(CUS_NAME,CUS_AGE,CUS_MOB)
        VALUES('{cus_name}','{cus_age}','{cus_mob}')
        """
        cursor.execute(insert_customer)
        conn.commit()
        print("Customer created successfully")
    except Exception as e:
        print(e)

# create_customer()



def add_product():
    try:
        prod_name=input("Enter product name :")
        prod_price=int(input("Enter your price :"))
        prod_desc=input("ENTER YOUR prod desc :")
        insert_product=f"""
        INSERT INTO PRODUCTS(PROD_NAME,PROD_PRICE,PROD_DESC)
        VALUES('{prod_name}','{prod_price}','{prod_desc}')
        """
        cursor.execute(insert_product)
        conn.commit()
        print("Product Inserted...")
    except Exception as e:
        print(e)

# add_product()



def add_cart():
    try:
        cus_id=int(input("Enter cus Id :"))
        prod_id=int(input("Enter your prod id :"))
        quantity=int(input("ENTER quantity :"))
        insert_cart=f"""
        INSERT INTO MY_CART(CUS_ID,PROD_ID,QUANTITY)
        VALUES('{cus_id}','{prod_id}','{quantity}')
        """
        cursor.execute(insert_cart)
        conn.commit()
        print("Added to Cart...")
    except Exception as e:
        print(e)

# add_cart()


def make_order():
    try:
        cus_id=int(input("Enter cus id :"))
        prod_id=int(input("Enter prod id : "))
        qty=int(input("Enter no of quantity :"))
        
        cursor.execute(f"""
                       SELECT PROD_PRICE FROM
                       PRODUCTS WHERE PROD_ID ={prod_id}""")
        prod_price=cursor.fetchone()
        print(type(prod_price),prod_price,"-----------------")
        if not prod_id:
            print("product nhi hai")
            return
        
        total_price=prod_price[0]*qty
        order_date=datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        cursor.execute(f"""
        INSERT INTO MY_ORDERS (CUS_ID,PROD_ID,TOTAL_PRICE,ORDER_DATE) 
        VALUES('{cus_id}','{prod_id}','{total_price}','{order_date}')
    """)
        conn.commit()
        # print("Order hogya..✅")  
    except Exception as e:
        print(e)
    
make_order()


def show_cart():
    query=f"""
    SELECT MY_CART.CART_ID , MY_CART.QUANTITY , CUSTOMER.CUS_NAME , PRODUCTS.PROD_ID ,
    PRODUCTS.PROD_NAME , PRODUCTS.PROD_PRICE ,PRODUCTS.PROD_DESC FROM MY_CART
    JOIN CUSTOMER ON MY_CART.CUS_ID = CUSTOMER.CUS_ID
    JOIN PRODUCTS ON MY_CART.PROD_ID = PRODUCTS.PROD_ID

    """
    cursor.execute(query)
    row=cursor.fetchall()
    if row:
        for r in row:
            print(r)
# show_cart()
# conn.close()