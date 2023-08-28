import { describe, expect, it } from 'vitest';
import { mountWithTheme } from '../../../utils/helpers/test';
import { HistoryIcon } from '../HistoryIcon';
import { HomeIcon } from '../HomeIcon';
import { LogoutIcon } from '../LogoutIcon';
import { MenuIcon } from '../MenuIcon';
import { ProfileIcon } from '../ProfileIcon';
import { RestartIcon } from '../Restarticon';
import { UsersIcon } from '../UsersIcon';

const renderIcons = () => mountWithTheme(<>
  <HistoryIcon/>
  <HomeIcon/>
  <LogoutIcon/>
  <MenuIcon/>
  <ProfileIcon/>
  <RestartIcon/>
  <UsersIcon/>
</>);

describe('Icons tests', () => {
  it('Should look like snapshots', () => {
    const icons = renderIcons();

    expect(icons.html()).toMatchSnapshot();
  });
});
