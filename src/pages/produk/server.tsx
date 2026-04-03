import TampilanProduk from "../../views/produk";


type ProductType = {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
};
const halamanProdukServer = ({products}: {products: ProductType[]}) => {
    return (
        <div>
            <h1>Halaman Produk Server by Abdul Latif</h1>
            <TampilanProduk products={products} />
        </div>
    );
}

export default halamanProdukServer;

export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/products");
    const respone = await res.json();

    return {
        props: {
            products: respone.data,
        },
    };
}