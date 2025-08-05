import { render } from '@testing-library/react';

import { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from './table';

describe('Table Components', () => {
  describe('Table', () => {
    it('renders table with container properly', () => {
      const { asFragment, container } = render(
        <Table>
          <tbody>
            <tr>
              <td>Cell content</td>
            </tr>
          </tbody>
        </Table>,
      );

      const tableContainer = container.querySelector('[data-slot="table-container"]');
      const table = container.querySelector('[data-slot="table"]');

      expect(tableContainer).toBeInTheDocument();
      expect(table).toBeInTheDocument();
      expect(table?.tagName).toBe('TABLE');
      expect(asFragment()).toMatchSnapshot();
    });

    it('applies custom className properly', () => {
      const { container } = render(
        <Table className="custom-table-class">
          <tbody>
            <tr>
              <td>Cell content</td>
            </tr>
          </tbody>
        </Table>,
      );

      const table = container.querySelector('[data-slot="table"]');
      expect(table).toHaveClass('custom-table-class');
    });

    it('passes through additional props', () => {
      const { container } = render(
        <Table data-testid="test-table" id="my-table">
          <tbody>
            <tr>
              <td>Cell content</td>
            </tr>
          </tbody>
        </Table>,
      );

      const table = container.querySelector('[data-slot="table"]');
      expect(table).toHaveAttribute('data-testid', 'test-table');
      expect(table).toHaveAttribute('id', 'my-table');
    });
  });

  describe('TableHeader', () => {
    it('renders thead properly', () => {
      const { asFragment, container } = render(
        <table>
          <TableHeader>
            <tr>
              <th>Header</th>
            </tr>
          </TableHeader>
        </table>,
      );

      const thead = container.querySelector('[data-slot="table-header"]');
      expect(thead).toBeInTheDocument();
      expect(thead?.tagName).toBe('THEAD');
      expect(asFragment()).toMatchSnapshot();
    });

    it('applies custom className properly', () => {
      const { container } = render(
        <table>
          <TableHeader className="custom-header-class">
            <tr>
              <th>Header</th>
            </tr>
          </TableHeader>
        </table>,
      );

      const thead = container.querySelector('[data-slot="table-header"]');
      expect(thead).toHaveClass('custom-header-class');
    });
  });

  describe('TableBody', () => {
    it('renders tbody properly', () => {
      const { asFragment, container } = render(
        <table>
          <TableBody>
            <tr>
              <td>Body content</td>
            </tr>
          </TableBody>
        </table>,
      );

      const tbody = container.querySelector('[data-slot="table-body"]');
      expect(tbody).toBeInTheDocument();
      expect(tbody?.tagName).toBe('TBODY');
      expect(asFragment()).toMatchSnapshot();
    });

    it('applies custom className properly', () => {
      const { container } = render(
        <table>
          <TableBody className="custom-body-class">
            <tr>
              <td>Body content</td>
            </tr>
          </TableBody>
        </table>,
      );

      const tbody = container.querySelector('[data-slot="table-body"]');
      expect(tbody).toHaveClass('custom-body-class');
    });
  });

  describe('TableFooter', () => {
    it('renders tfoot properly', () => {
      const { asFragment, container } = render(
        <table>
          <TableFooter>
            <tr>
              <td>Footer content</td>
            </tr>
          </TableFooter>
        </table>,
      );

      const tfoot = container.querySelector('[data-slot="table-footer"]');
      expect(tfoot).toBeInTheDocument();
      expect(tfoot?.tagName).toBe('TFOOT');
      expect(asFragment()).toMatchSnapshot();
    });

    it('applies custom className properly', () => {
      const { container } = render(
        <table>
          <TableFooter className="custom-footer-class">
            <tr>
              <td>Footer content</td>
            </tr>
          </TableFooter>
        </table>,
      );

      const tfoot = container.querySelector('[data-slot="table-footer"]');
      expect(tfoot).toHaveClass('custom-footer-class');
    });
  });

  describe('TableRow', () => {
    it('renders tr properly', () => {
      const { asFragment, container } = render(
        <table>
          <tbody>
            <TableRow>
              <td>Row content</td>
            </TableRow>
          </tbody>
        </table>,
      );

      const tr = container.querySelector('[data-slot="table-row"]');
      expect(tr).toBeInTheDocument();
      expect(tr?.tagName).toBe('TR');
      expect(asFragment()).toMatchSnapshot();
    });

    it('applies custom className properly', () => {
      const { container } = render(
        <table>
          <tbody>
            <TableRow className="custom-row-class">
              <td>Row content</td>
            </TableRow>
          </tbody>
        </table>,
      );

      const tr = container.querySelector('[data-slot="table-row"]');
      expect(tr).toHaveClass('custom-row-class');
    });

    it('supports data-state attribute for selection', () => {
      const { container } = render(
        <table>
          <tbody>
            <TableRow data-state="selected">
              <td>Selected row</td>
            </TableRow>
          </tbody>
        </table>,
      );

      const tr = container.querySelector('[data-slot="table-row"]');
      expect(tr).toHaveAttribute('data-state', 'selected');
    });
  });

  describe('TableHead', () => {
    it('renders th properly', () => {
      const { asFragment, container } = render(
        <table>
          <thead>
            <tr>
              <TableHead>Header content</TableHead>
            </tr>
          </thead>
        </table>,
      );

      const th = container.querySelector('[data-slot="table-head"]');
      expect(th).toBeInTheDocument();
      expect(th?.tagName).toBe('TH');
      expect(asFragment()).toMatchSnapshot();
    });

    it('applies custom className properly', () => {
      const { container } = render(
        <table>
          <thead>
            <tr>
              <TableHead className="custom-head-class">Header content</TableHead>
            </tr>
          </thead>
        </table>,
      );

      const th = container.querySelector('[data-slot="table-head"]');
      expect(th).toHaveClass('custom-head-class');
    });

    it('renders with checkbox properly', () => {
      const { container } = render(
        <table>
          <thead>
            <tr>
              <TableHead>
                <input type="checkbox" />
                Header
              </TableHead>
            </tr>
          </thead>
        </table>,
      );

      const checkbox = container.querySelector('input[type="checkbox"]');
      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('TableCell', () => {
    it('renders td properly', () => {
      const { asFragment, container } = render(
        <table>
          <tbody>
            <tr>
              <TableCell>Cell content</TableCell>
            </tr>
          </tbody>
        </table>,
      );

      const td = container.querySelector('[data-slot="table-cell"]');
      expect(td).toBeInTheDocument();
      expect(td?.tagName).toBe('TD');
      expect(asFragment()).toMatchSnapshot();
    });

    it('applies custom className properly', () => {
      const { container } = render(
        <table>
          <tbody>
            <tr>
              <TableCell className="custom-cell-class">Cell content</TableCell>
            </tr>
          </tbody>
        </table>,
      );

      const td = container.querySelector('[data-slot="table-cell"]');
      expect(td).toHaveClass('custom-cell-class');
    });

    it('renders with checkbox properly', () => {
      const { container } = render(
        <table>
          <tbody>
            <tr>
              <TableCell>
                <input type="checkbox" />
                Cell content
              </TableCell>
            </tr>
          </tbody>
        </table>,
      );

      const checkbox = container.querySelector('input[type="checkbox"]');
      expect(checkbox).toBeInTheDocument();
    });
  });

  describe('TableCaption', () => {
    it('renders caption properly', () => {
      const { asFragment, container } = render(
        <table>
          <TableCaption>Table caption</TableCaption>
          <tbody>
            <tr>
              <td>Cell content</td>
            </tr>
          </tbody>
        </table>,
      );

      const caption = container.querySelector('[data-slot="table-caption"]');
      expect(caption).toBeInTheDocument();
      expect(caption?.tagName).toBe('CAPTION');
      expect(asFragment()).toMatchSnapshot();
    });

    it('applies custom className properly', () => {
      const { container } = render(
        <table>
          <TableCaption className="custom-caption-class">Table caption</TableCaption>
          <tbody>
            <tr>
              <td>Cell content</td>
            </tr>
          </tbody>
        </table>,
      );

      const caption = container.querySelector('[data-slot="table-caption"]');
      expect(caption).toHaveClass('custom-caption-class');
    });
  });

  describe('Complete Table Structure', () => {
    it('renders complete table structure properly', () => {
      const { asFragment, getByText } = render(
        <Table>
          <TableCaption>A list of recent invoices</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">INV002</TableCell>
              <TableCell>Pending</TableCell>
              <TableCell>PayPal</TableCell>
              <TableCell className="text-right">$150.00</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$400.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>,
      );

      expect(getByText('A list of recent invoices')).toBeInTheDocument();
      expect(getByText('Invoice')).toBeInTheDocument();
      expect(getByText('INV001')).toBeInTheDocument();
      expect(getByText('Total')).toBeInTheDocument();
      expect(asFragment()).toMatchSnapshot();
    });

    it('renders table with selected row', () => {
      const { container } = render(
        <Table>
          <TableBody>
            <TableRow data-state="selected">
              <TableCell>Selected row</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Normal row</TableCell>
            </TableRow>
          </TableBody>
        </Table>,
      );

      const selectedRow = container.querySelector('[data-state="selected"]');
      expect(selectedRow).toBeInTheDocument();
    });
  });
});
