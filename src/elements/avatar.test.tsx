import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Avatar, AvatarImage, AvatarFallback, AvatarBadge, AvatarGroup, AvatarGroupCount } from './avatar';

describe('Avatar', () => {
  it('renders with fallback properly', () => {
    const { asFragment } = render(
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with image properly', () => {
    const { asFragment } = render(
      <Avatar>
        <AvatarImage src="https://example.com/avatar.png" alt="User" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders small size', () => {
    const { container } = render(
      <Avatar size="sm">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>,
    );
    const avatarEl = container.querySelector('[data-slot="avatar"]');
    expect(avatarEl).toHaveAttribute('data-size', 'sm');
  });

  it('renders default size', () => {
    const { container } = render(
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>,
    );
    const avatarEl = container.querySelector('[data-slot="avatar"]');
    expect(avatarEl).toHaveAttribute('data-size', 'default');
  });

  it('renders large size', () => {
    const { container } = render(
      <Avatar size="lg">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>,
    );
    const avatarEl = container.querySelector('[data-slot="avatar"]');
    expect(avatarEl).toHaveAttribute('data-size', 'lg');
  });

  it('applies custom className to Avatar', () => {
    const { container } = render(
      <Avatar className="custom-class">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>,
    );
    const avatarEl = container.querySelector('[data-slot="avatar"]');
    expect(avatarEl).toHaveClass('custom-class');
  });

  it('renders AvatarImage with correct data-slot', () => {
    const { asFragment } = render(
      <Avatar>
        <AvatarImage className="custom-img" src="https://example.com/avatar.png" alt="User" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('applies custom className to AvatarFallback', () => {
    const { container } = render(
      <Avatar>
        <AvatarFallback className="custom-fallback">AB</AvatarFallback>
      </Avatar>,
    );
    const fallbackEl = container.querySelector('[data-slot="avatar-fallback"]');
    expect(fallbackEl).toHaveClass('custom-fallback');
  });

  it('renders with badge', () => {
    const { asFragment } = render(
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
        <AvatarBadge />
      </Avatar>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('applies custom className to AvatarBadge', () => {
    const { container } = render(
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
        <AvatarBadge className="custom-badge" />
      </Avatar>,
    );
    const badgeEl = container.querySelector('[data-slot="avatar-badge"]');
    expect(badgeEl).toHaveClass('custom-badge');
  });

  it('supports additional HTML attributes', () => {
    const { container } = render(
      <Avatar id="test-avatar" data-testid="custom-avatar">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>,
    );
    const avatarEl = container.querySelector('[data-slot="avatar"]');
    expect(avatarEl).toHaveAttribute('id', 'test-avatar');
    expect(avatarEl).toHaveAttribute('data-testid', 'custom-avatar');
  });
});

describe('AvatarGroup', () => {
  it('renders group properly', () => {
    const { asFragment } = render(
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
      </AvatarGroup>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders group with count', () => {
    const { asFragment } = render(
      <AvatarGroup>
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
        <AvatarGroupCount>+3</AvatarGroupCount>
      </AvatarGroup>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('applies custom className to AvatarGroup', () => {
    const { container } = render(
      <AvatarGroup className="custom-group">
        <Avatar>
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </AvatarGroup>,
    );
    const groupEl = container.querySelector('[data-slot="avatar-group"]');
    expect(groupEl).toHaveClass('custom-group');
  });

  it('applies custom className to AvatarGroupCount', () => {
    const { container } = render(
      <AvatarGroup>
        <AvatarGroupCount className="custom-count">+3</AvatarGroupCount>
      </AvatarGroup>,
    );
    const countEl = container.querySelector('[data-slot="avatar-group-count"]');
    expect(countEl).toHaveClass('custom-count');
  });
});
