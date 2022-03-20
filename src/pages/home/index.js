import { Link } from 'umi';
import { Button } from 'antd'
const Home = () => <>
  {/* Link 只用于单页应用的内部跳转，如果是外部地址跳转请使用 a 标签 */}
  <Link to="/designer"><Button>设计器</Button></Link>
  <Link to="/profile"><Button>画像</Button></Link>
  <div>Home</div>
</>

export default Home;