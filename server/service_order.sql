-- creat table service_order
CREATE TABLE service_orders (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    user_id INT NOT NULL,
    username VARCHAR(50) NOT NULL,
    item_qty INT NOT NULL,
    discount INT DEFAULT 0,
    total INT NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    order_status VARCHAR(255) DEFAULT 'processing',
    zip VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    delivered_at TIMESTAMP DEFAULT NULL,
    bill_start_at TIMESTAMP DEFAULT NULL,
    shipped_at TIMESTAMP DEFAULT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- insert data into service_order table
INSERT INTO service_orders (service_id, user_id, quantity, discount, total, address, city, state, zip, country, phone, status) VALUES (1, 1, 1, 0, 100, 'address', 'city', 'state', 'zip', 'country', 'phone', 'pending');

-- create table service_order_item
CREATE TABLE service_order_items (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    user_id INT NOT NULL,
    username VARCHAR(50) NOT NULL,
    service_order_id INT NOT NULL,
    service_id INT NOT NULL,
    service_name VARCHAR(255) NOT NULL,
    quantity INT NOT NULL,
    unit_price INT NOT NULL,
    unit VARCHAR(255) NOT NULL,
    icon_url VARCHAR(255) NOT NULL,
    discount INT DEFAULT 0,
    total INT NOT NULL,
    order_total INT NOT NULL,
    odder_discount INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (service_order_id) REFERENCES service_orders(id),
    FOREIGN KEY (service_id) REFERENCES services(id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


-- delete multiple service_order
DELETE FROM service_orders WHERE id IN (1,2,3);



-- get service_order by user_id with service_order_items
SELECT so.id, so.user_id, so.item_qty, so.discount, so.total, so.address, so.city, so.state, so.zip, so.country, so.phone, so.status, so.created_at, so.updated_at, soi.id, soi.service_order_id, soi.service_id, soi.service_name, soi.quantity, soi.unit_price, soi.unit, soi.discount, soi.total, soi.created_at, soi.updated_at FROM service_orders so LEFT JOIN service_order_items soi ON so.id = soi.service_order_id WHERE so.user_id = 1;

-- get service_order by id with service_order_items as orderItems
SELECT so.id, so.user_id, so.item_qty, so.discount, so.total, so.address, so.city, so.state, so.zip, so.country, so.phone, so.status, so.created_at, so.updated_at, json_agg(soi) as orderItems FROM service_orders so LEFT JOIN service_order_items soi ON so.id = soi.service_order_id WHERE so.id = 1 GROUP BY so.id;

const { rows: orders } = await db.query(
    'SELECT so.id, so.user_id, so.item_qty, so.total, so.address, so.city, so.state, so.zip, so.country, so.phone, so.status, so.created_at, so.updated_at, soi.service_id, soi.service_name, soi.quantity, soi.unit_price, soi.unit, soi.total FROM service_orders so INNER JOIN service_order_items soi ON so.id = soi.service_order_id WHERE so.user_id = $1',
    [user_id]
  );


-- delete service_order by id
DELETE FROM service_orders WHERE id = 1;

-- delete multiple service_order_item 
DELETE FROM service_order_items WHERE id IN (1,2,3);

-- change service_order_item odder_discount to order_discount
ALTER TABLE service_order_items RENAME COLUMN odder_discount TO order_discount;

-- create table service_order_bill
CREATE TABLE service_order_bills (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    user_id INT NOT NULL,
    username VARCHAR(50) NOT NULL,
    service_order_id INT NOT NULL,
    item_quantity INT NOT NULL,
    discount INT DEFAULT 0,
    total INT NOT NULL,
    daily_bill INT NOT NULL,
    net_total INT NOT NULL,
    last_paid_amount INT DEFAULT 0,
    reaming_amount INT DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    is_stopped BOOLEAN DEFAULT FALSE,
    last_paid_at TIMESTAMP DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    bill_start_at TIMESTAMP DEFAULT NULL,
    bill_end_at TIMESTAMP DEFAULT NULL,
    bill_status VARCHAR(255) DEFAULT 'pending',
    FOREIGN KEY (service_order_id) REFERENCES service_orders(id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- insert data into service_order_bill table
INSERT INTO service_order_bills (user_id, username, service_order_id, item_quantity, discount, total, daily_bill, net_total, reaming_amount) VALUES (1, 'username', 1, 1, 0, 100, 10, 90, 90);

-- cgrate table payment
CREATE TABLE payments (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    user_id INT NOT NULL,
    username VARCHAR(50) NOT NULL,
    service_order_id INT NOT NULL,
    service_order_bill_id INT NOT NULL,
    amount INT NOT NULL,
    payment_method VARCHAR(255) NOT NULL,
    payment_status VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (service_order_id) REFERENCES service_orders(id),
    FOREIGN KEY (service_order_bill_id) REFERENCES service_order_bills(id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);