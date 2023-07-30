import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSnapshot } from 'valtio';
import { addNoteToCompany, setActiveCompany } from '../../store/actions';
import _ from '../../store/store';
import { selectCompanyById, selectStageOfCompany } from '../../store/selectors';
import { CompanyNote, User } from '../../store/types';
import Breadcrumbs from '../Breadcrumbs';
import { useEffect } from 'react';
	