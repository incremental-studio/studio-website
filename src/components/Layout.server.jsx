import Header from './Header.server';
import Footer from './Footer.server';

export default function Layout({children}) {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
