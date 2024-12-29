import { _mock } from './_mock';
import { _tags } from './assets';

// ----------------------------------------------------------------------

const COLORS = [
  '#FF4842',  // Red (for beef)
  '#1890FF',  // Blue (for cold storage/freezing)
  '#FFC0CB',  // Pink (for processed meats)
  '#00AB55',  // Green (for fresh meat)
  '#FFC107',  // Yellow (for seasoning and spices)
  '#7F00FF',  // Purple (for gourmet meats)
  '#000000',  // Black (for charcoal grilling)
  '#FFFFFF',  // White (for poultry)
];

const DESCRIPTION = `
<h6>Specifications</h6>
<table>
  <tbody>
    <tr>
      <td>Category</td>
      <td>Meat Processing Equipment</td>
    </tr>
    <tr>
      <td>Manufacturer</td>
      <td>MeatTech</td>
    </tr>
    <tr>
      <td>Warranty</td>
      <td>12 Months</td>
    </tr>
    <tr>
      <td>Serial number</td>
      <td>358607726380311</td>
    </tr>
    <tr>
      <td>Ships from</td>
      <td>United States</td>
    </tr>
  </tbody>
</table>

<h6>Product details</h6>
<ul>
  <li>
    <p>The stainless steel body ensures durability and easy cleaning</p>
  </li>
  <li>
    <p>Heavy-duty motor for quick and efficient meat grinding</p>
  </li>
  <li>
    <p>Ideal for commercial kitchens and butcher shops</p>
  </li>
  <li>
    <p>Colour Shown: Stainless Steel</p>
  </li>
  <li>
    <p>Model: MTG-200</p>
  </li>
  <li>
    <p>Country/Region of Origin: USA</p>
  </li>
</ul>
<h6>Benefits</h6>
<ul>
  <li>
    <p>High power motor reduces processing time and improves efficiency</p>
  </li>
  <li>
    <p>Easy to operate with multiple settings for different meat types</p>
  </li>
  <li>
    <p>Durable design suitable for long-term use in professional environments</p>
  </li>
  <li>
    <p>Includes multiple attachments for sausage stuffing and mincing</p>
  </li>
</ul>
<h6>Delivery and returns</h6>
<p>Your order of $200 or more gets free standard delivery.</p>
<ul>
  <li>
    <p>Standard delivery 4-5 Business Days</p>
  </li>
  <li>
    <p>Express delivery 2-4 Business Days</p>
  </li>
</ul>
<p>Orders are processed and delivered Monday-Friday (excluding public holidays)</p>
`;

const generateAttachments = () => [...Array(20)].map((_, index) => _mock.image.product(index));

const generateReviews = () => {
  const attachments = generateAttachments();

  return [...Array(8)].map((_, index) => ({
    id: _mock.id(index),
    name: _mock.fullName(index),
    postedAt: _mock.time(index),
    comment: _mock.sentence(index),
    isPurchased: _mock.boolean(index),
    rating: _mock.number.rating(index),
    avatarUrl: _mock.image.avatar(index),
    helpful: _mock.number.nativeL(index),
    attachments:
        (index === 1 && attachments.slice(0, 1)) ||
        (index === 3 && attachments.slice(2, 4)) ||
        (index === 5 && attachments.slice(5, 8)) ||
        [],
  }));
};

const getColorSliceForIndex = (index: number) => {
  if (index === 0) return COLORS.slice(0, 2);
  if (index === 1) return COLORS.slice(1, 3);
  if (index === 2) return COLORS.slice(2, 4);
  if (index === 3) return COLORS.slice(3, 6);
  if (index === 4 || index === 16 || index === 19) return COLORS.slice(4, 6);
  if (index === 5 || index === 17) return COLORS.slice(5, 6);
  if (index === 6 || index === 18) return COLORS.slice(0, 2);
  if (index === 7) return COLORS.slice(4, 6);
  if (index === 8) return COLORS.slice(2, 4);
  if (index === 9 || index === 11) return COLORS.slice(2, 6);
  if (index === 10) return COLORS.slice(3, 6);
  if (index === 12) return COLORS.slice(2, 7);
  if (index === 13) return COLORS.slice(4, 7);
  if (index === 14) return COLORS.slice(0, 2);
  if (index === 15) return COLORS.slice(5, 8);
  return COLORS.slice(2, 6); // Default case
};

const generateRatings = () =>
    [...Array(5)].map((_, index) => ({
      name: `${index + 1} Star`,
      starCount: _mock.number.nativeL(index),
      reviewCount: _mock.number.nativeL(index + 1),
    }));

const generateImages = () => [...Array(8)].map((_, index) => _mock.image.product(index));

// ----------------------------------------------------------------------

export const _products = () =>
    [...Array(20)].map((_, index) => {
      const reviews = generateReviews();
      const images = generateImages();
      const ratings = generateRatings();

      const publish = index % 3 ? 'published' : 'draft';

      const category = (index % 2 && 'Meat Processing') || (index % 3 && 'BBQ Equipment') || 'Meat Cutting Tools';

      const gender = (index % 2 && ['Men']) || (index % 3 && ['Women', 'Kids']) || ['Kids'];

      const available = (index % 2 && 72) || (index % 3 && 10) || 0;

      const inventoryType = (index % 2 && 'in stock') || (index % 3 && 'low stock') || 'out of stock';

      const priceSale = index % 3 ? null : _mock.number.price(index);

      return {
        id: _mock.id(index),
        gender,
        images,
        reviews,
        publish,
        ratings,
        category,
        available,
        priceSale,
        taxes: 10,
        quantity: 80,
        inventoryType,
        tags: _tags.slice(0, 5),
        code: `38BEE27${index}`,
        description: DESCRIPTION,
        sku: `WW75K521${index}YW/SV`,
        createdAt: _mock.time(index),
        name: _mock.productName(index),
        price: _mock.number.price(index),
        coverUrl: _mock.image.product(index),
        colors: getColorSliceForIndex(index),
        totalRatings: _mock.number.rating(index),
        totalSold: _mock.number.nativeM(index + 1),
        totalReviews: _mock.number.nativeL(index + 1),
        newLabel: { enabled: [1, 2, 3].includes(index), content: 'NEW' },
        saleLabel: { enabled: [4, 5].includes(index), content: 'SALE' },
        sizes: ['6', '7', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '13'],
        subDescription:
            'High-performance meat cutting equipment designed to handle the toughest tasks in meat processing, ideal for both professional butchers and home enthusiasts.',
      };
    });
