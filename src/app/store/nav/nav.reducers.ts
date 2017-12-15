import * as NavActions from './nav.actions';
import { NavItem }     from '../../shared/models/nav-item.model';
import { navItems }    from '../../shared/data/nav-items.data';
import { WorkItem }    from '../../shared/models/work-item.model';

export interface State {
  navItems: NavItem[];
  workItems: any;
  showForm: boolean;
  editedItem: WorkItem;
}

const initialState = {
  navItems: navItems,
  workItems: [],
  showForm: false,
  editedItem: new WorkItem('', '', '', '')
};

export function NavReducer(state = initialState, action: NavActions.NavActions) {
  switch (action.type) {
    case (NavActions.SAVE_FETCHED_DATA):
      return {
        ...state,
        workItems: action.payload
      };

    case (NavActions.SHOW_FORM):
      return {
        ...state,
        showForm: action.payload
      };

    case (NavActions.SET_EDITED_ITEM):
      if (action.payload !== undefined) {
        state.editedItem = action.payload;
      } else {
        state.editedItem = new WorkItem('', '', '', '');
      }
      return {
        ...state
      };

    default:
      return state;
  }
}
