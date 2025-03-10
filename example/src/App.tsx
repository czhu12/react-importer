import 'react-importer/peer/index.css';
import Header from './components/Header';
import CodeBlock from './components/CodeBlock';
import Footer from './components/Footer';
import { EXAMPLE_CODE } from './constants';
import {
  EmployeeSheetImporter,
  EmployeeImporter,
  WideImporter,
} from './components/importers';

const App = () => {
  return (
    <div className="min-h-screen w-full">
      <Header />

      <div className="mb-16">
        <div className="content">
          <h3 className="rubik text-4xl font-bold">
            Building a CSV uploader is hard
          </h3>
          <p>
            {`OneImport is a javascript library that makes it easy to drop in a
            powerful, intuitive, and elegant CSV uploader. It's just ~130KB
            gzipped, and works with any javascript application.`}
          </p>
        </div>

        <div className="content">
          <CodeBlock
            title="Drop in an uploader into your app in seconds"
            code={EXAMPLE_CODE}
          />
        </div>

        <EmployeeImporter />
        <EmployeeSheetImporter />
        <WideImporter />
      </div>

      <Footer />
    </div>
  );
};

export default App;
